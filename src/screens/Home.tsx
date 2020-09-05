import React, { Component, RefObject } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { connect } from "react-redux";
import axios from "axios";
import { HomeScreenRouteProp, HomeScreenNavigationProp } from "../navigator/types";
import { homeMounted } from "../actions";
import Carousel from "react-native-snap-carousel";
import DeviceConfig from "../services/deviceConfig";
import deviceStorage from "../services/deviceStorage";
import { HomeHeader, Card } from "../components";
import { Gradient } from "../components/common";
import Icons from "../../assets/icons";
import styles from "../styles/Home";

interface Production {
  name: string;
  coverImage: string;
}

interface HomeProps {
  homeMounted: any;

  username: string;
  productions: Production[];

  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

interface HomeState {
  activeIndex: number;
}

const windowWidth = DeviceConfig.getWindowWidth();

class Home extends Component<HomeProps, HomeState> {

  private carousel: RefObject<any>;

  constructor(props: HomeProps){
    super(props);
    this.carousel = React.createRef();
    this.state = {
      activeIndex: 0
    }
  }

  async componentDidMount() {
    const jwt = await deviceStorage.retrieveItem("token_id");
    axios.get('http://192.168.0.5:3000/home', {
      headers: {
        authorization: `Bearer ${jwt}`
      }
    }).then((res) => {
      this.props.homeMounted(res.data);
    }).catch((error) => {
      console.log(error);
    }); 
  }

  renderProductionCard({ item }: any) {
    return (
      Object.keys(item).length !== 0 ? 
      <Card label={item.name} status="Active" image={item.coverImage} notificationCount={0} /> :
      <Card newSet={true} />
    );
  }

  onSeeAll = async () => {
    await deviceStorage.deleteItem("token_id");
  }

  onSettings = () => {
    this.props.navigation.navigate('Settings');
  }

  renderCarousel = () => {
    return (
      <Carousel 
        layout={"default"}
        ref={(ref: any) => this.carousel = ref}
        data={[...this.props.productions, {}]}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 60}
        renderItem={this.renderProductionCard}
        onSnapToItem={index => this.setState({ activeIndex: index })}
      />)
  }

  render() {
    return (
      <Gradient>
        <View style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <HomeHeader username={this.props.username} onSeeAll={this.onSeeAll} onSettings={this.onSettings} />
          </View>
          <View style={{ flex: 4 }}>
            {this.renderCarousel()}
          </View>   
          <View style={styles.advanceButtonContainer}>
            <TouchableOpacity>
              <View style={styles.advanceButton}>
                <Image source={Icons.forwardIOS} resizeMode="center" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Gradient>
    )
  }
}

const mapStateToProps = ({ home }: any) => {
  const { productions, username } = home;
  return { productions, username };
}

export default connect(mapStateToProps, { homeMounted })(Home);
