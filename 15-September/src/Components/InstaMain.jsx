import React, { Component } from "react";
import { Feed } from "./Feed";

export class InstaMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          userName: "Prakash",
          id: 0,
          msg: "Welcome to Dubai",
          imgUrl:
            "https://images.thequint.com/thequint%2F2021-11%2F72eab104-c4b0-4f66-ad46-132aa1ab53bc%2Fsrk.jpg",
        },
        {
          userName: "Akshay Kumar",
          id: 1,
          msg: "Welcome to India",
          imgUrl:
            "https://cdn.siasat.com/wp-content/uploads/2021/07/AkshayKumar.jpg",
        },
        {
          userName: "Henry Kavil",
          id: 0,
          msg: "Welcome to London",
          imgUrl:
            "https://thumbs.dreamstime.com/b/henry-cavill-los-angeles-ca-november-world-premiere-justice-league-dolby-theatre-hollywood-168932019.jpg",
        },
        {
          userName: "Prashant",
          id: 1,
          msg: "Welcome to India",
          imgUrl:
            "https://thumbs.dreamstime.com/z/welcome-to-india-sing-wood-background-76229039.jpg",
        },
        {
          userName: "Vasanth",
          id: 0,
          msg: "Welcome to Dubai",
          imgUrl:
            "https://media.istockphoto.com/photos/panorama-of-dubai-marina-in-uae-modern-skyscrapers-and-port-with-picture-id1266923176?k=20&m=1266923176&s=612x612&w=0&h=8JPKK6tQW6X8e7v6MBbJI2MMeOmnRQi5N0yDn-WhyOg=",
        },
        
      ],
    };
  }

  render() {
    return (
      <div className="container">
        {this.state.data.map((feed) => (
          <Feed feed={feed} />
        ))}
      </div>
    );
  }
}