import React, { Component, RefObject } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import HomeHeader from "../components/HomeHeader";
import { Gradient, Card } from "../components/common";
import { Images } from "../../assets/images";
import styles from "../styles/Home";

interface HomeProps {}

interface HomeState {
  carouselItems: Array<{title: string, image: string}>
  activeIndex: number;
}

const windowWidth = Dimensions.get('window').width;

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
      }
    ]}
  }

  _renderItem({ item, index }: any) {
    return (
      <Card 
        label={item.title}
        status="Active"
        image={item.image} 
        notificationCount={1}
      />
    )
  }

  render() {
    return (
      <Gradient>
        <View style={styles.contentContainer}>
          <HomeHeader username="Kai" />
          <Carousel
            layout={"default"}
            ref={(ref: any) => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 60}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </Gradient>
    )
  }
}

export default Home;
