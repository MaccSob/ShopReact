import React from "react";
import './Contact.css'
import Accordion from './FAQ';



const Contact = () => {
    const accordionData = [
        {
          title: 'Where can i find the receipt?',
          content: `We're sending every receipt via e-mail..`
        },
        {
          title: 'Will/When there be more juices to buy?',
          content: `We plan on expanding our assortment in the upcoming year.`
        },
        {
          title: 'Are you shipping worldwide?',
          content: `As of 2024, shipment is limited to Poland, Germany and Czechia.`
        }
      ];

    return (
        <>
       <h2>Need help?  </h2>
       <h3>Choose a preferred a channel of communication and let us help you!</h3>
       <section>
        <p></p>
        <h3>Frequently asked questions:</h3>
       <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
        </section>
     
        </>
    )
}
export default Contact;