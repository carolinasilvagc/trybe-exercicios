import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: [],
      loading: true,
    };
  }

  componentDidMount() {
    const URL = 'https://api.randomuser.me/';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.person[0].dob.age < AGE) return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { loading, person } = this.state;
    if (loading) return <Loading />;
    return (
      <div>
        <PersonCard
          person={ this.getUserElements(person[0]) }
        />
      </div>
    );
  }
}

export default PersonDetails;