import React, { Component, RefObject } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import DeviceConfig from "../services/deviceConfig";
import { HomeHeader, Card } from "../components";
import { Gradient } from "../components/common";
import { Images } from "../../assets/images";
import Icons from "../../assets/icons";
import styles from "../styles/Home";

interface HomeProps {}

interface HomeState {
  carouselItems: Array<{title: string, image: string}>
  activeIndex: number;
}

const windowWidth = DeviceConfig.getWindowWidth();

class Home extends Component<HomeProps, HomeState> {

  private carousel: RefObject<any>;

  constructor(props: HomeProps){
    super(props);
    this.carousel = React.createRef();
    this.state = {
      activeIndex: 0,
      carouselItems: [
      {
        title: "The Omega",
        image: Images.theOmegaPlaceholder
      },
      {
        title: "Dream Catchers",
        image: Images.dreamCatchersPlaceholder
      },
      {
        title: "Amelia",
        image: Images.ameliaPlaceholder
      }
    ]}
  }

  _renderItem({ item, index }: any) {
    return (
      <Card 
        label={item.title}
        status="Active"
        image={item.image} 
        notificationCount={0}
      />
    )
  }

  render() {
    return (
      <Gradient>
        <View style={styles.contentContainer}>
          <View style={{ flex: 1 }}>
            <HomeHeader username="Kai" onSeeAll={() => console.log("See all tapped")} />
          </View>
          <View style={{ flex: 4 }}>
            <Carousel
              layout={"default"}
              ref={(ref: any) => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={windowWidth}
              itemWidth={windowWidth - 60}
              renderItem={this._renderItem}
              onSnapToItem={index => this.setState({ activeIndex: index })}
            />
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

export default Home;
