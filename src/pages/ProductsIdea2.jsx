import React from 'react'
import ProductCardDesign2 from '../components/productCardDesign2/ProductCardDesign2'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.png"

const ProductsIdea2 = () => {
  const products=[
    {
      name:"Narrator",
      image:image1,
      detailsParagraphs:["Narrator is G Square’s AI driven Business Intelligence & Robo analytics tool. The users get Dashboards , Smart Visualization and actionable Insights in natural language and a Data Chatbot for replying to their data queries.",
        "It provides an end to end smart Business Intelligence (BI) solution for enterprises. The users can also choose it for specific needs like Data"
      ],
      subHeading:"Narrator has three modules:",
      list:["Custom Analysis – Design customized reports based on your own requirements",
        "Ask Narrator- This Bot feature gives answers/information/analytics on your data",
        "Automated Analysis – Automated analytics on a real time basis with the press of a button"
      ],
      buttonText:"Try Narrator"
    },
    {
      name:"Clientrator",
      image:image2,
      detailsParagraphs:["Clientrator is a comprehensive customer analytics tool that provides a predictive analytics productified solution at customer level. Through its Data Science modelling solutions provides next best action for organisations on each customer to increase sales and Reduce attrition.",
      ],
      subHeading:"The functionalities of the tool are :",
      list:["Up sell, cross sell, attrition modelling on the go.",
        "Descriptive & single customer view",
        "Market Basket Analysis & Lead Analytics",
        "Campaign tracking or integration with external campaign tools"
      ],
      buttonText:"Try Clientrator"
    },
    {
      name:"Bigdator",
      image:image3,
      detailsParagraphs:["Bigdator is our big data tool meant to analyse large amount of unstructured & structured data on the go. By using Bigdator’s various modules, users can do analysis on the data available in public domain like news articles, social media like Facebook pages and on internal text data.",
      ],
      subHeading:"The various modules in Bigdator are :",
      list:["Newsrator: News, Articles, Blogs analysis for company/sector analysis and sentiments",
        "Sociometor: Social media analytics for knowing customer",
        "Textrator: Analyse large unstructured text for dejargonising the incomprehensible text and narrations",
      ],
      buttonText:"Try Bigdator"
    },
  ]
  return (
    <>
    {products?.map((product,index)=>(<ProductCardDesign2 prop={product} key={index}/>))}
     </>        
  )
}

export default ProductsIdea2