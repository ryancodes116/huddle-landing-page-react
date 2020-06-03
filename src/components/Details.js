import React from 'react';
import classNames from 'classnames';
import styles from '../styles/Details.module.css';
import Card from './Card';
import grow from '../images/illustration-grow-together.svg';
import conversation from '../images/illustration-flowing-conversation.svg';
import users from '../images/illustration-your-users.svg';

const Details = () => {
  return (
    <div className={styles.details}>
      <Card
        imageSrc={grow}
        imageAlt="grow together illustration"
        title="Grow Together"
        text="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful converstaions you miss out on with a feedback form."
      />
      <Card
        imageSrc={conversation}
        imageAlt="flowing conversations illustration"
        title="Flowing Conversations"
        text="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
      />
      <Card
        imageSrc={users}
        imageAlt="your users illustration"
        title="Your Users"
        text="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your useres can start chatting immediately."
      />

      <div className={styles.cta}>
        <h3 className={styles.title}>Ready To Build Your Community?</h3>
        <button class="btn">Get Started For Free</button>
      </div>
    </div>
  );
};

export default Details;
