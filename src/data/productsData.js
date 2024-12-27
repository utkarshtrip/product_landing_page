import image2 from "../assets/image2.png"
import image3 from "../assets/image3.jpg"
import documentSearchImage from '../assets/document-search-image1.png'
import chatbotCollage from "../assets/chatbot-collage.png"
 
export const products=[
    {
      name:"Document Search Platform",
      image:documentSearchImage,
      detailsParagraphs:["Unlock the power of efficient document management with our innovative Document Search Platform.",
        "This application provides users with an intuitive way to upload and manage documents or scanned files and perform lightning-fast searches across their content"
      ],
      subHeading:"Key Features of the Platform:",
      list:["Easily upload PDFs, Word documents, scanned images, and more.",
        "Securely store and organize your files in one place.",
        "Leverage Elasticsearch to perform quick, accurate, and full-text searches.",
        "Use filters and advanced search syntax to refine results.",
        "Automatically extract text from scanned documents or images for seamless searching.",
        "View files directly from search results.",
      ],
      buttonText:"Try Platform",
      projectLink:"http://dev-docsearch.centralindia.azurecontainer.io"
    },
    {
      name:"RAG (Retrieval-Augmented Generation) Chatbots",
      image:chatbotCollage,
      detailsParagraphs:["Empower your knowledge discovery with RAG (Retrieval-Augmented Generation) Chatbots—a smart solution for extracting precise answers and insights from your uploaded documents. Whether you need summaries, specific information, or operator-specific assistance, these chatbots provide seamless interactions tailored to your needs.",
     
      ],
      list:[
        "FM Doc Summarizer: A powerful chatbot designed to summarize pre-uploaded documents or answer questions based on a selected document from the library. Perfect for users looking to quickly grasp key insights or dive deep into specific content.",
        "FM Doc Summary & Upload: Upload your own documents and ask detailed questions based on their content. Ideal for personalized document analysis and real-time Q&A tailored to user-provided files.",
        "TeleConnect Companion (Streamlit):Tailored for telecom operators like Jio, Airtel, and others, this chatbot addresses user-specific queries related to network issues, connectivity, and operator-specific concerns. A great tool for customer support and troubleshooting",
        "Each chatbot is uniquely optimized to deliver efficient and accurate responses, making them versatile tools for professionals, researchers, and everyday users."
      ],
      buttonText:null,
      chatbot:[
        {
          id:'chat1',
        text:"FM Doc Summarizer",
        link:"https://fm-doc-summarizer.streamlit.app/"
        },
        {
          id:'chat2',
        text:"FM Doc Summary & Upload",
        link:"https://fm-doc-summary-upload.streamlit.app/"
        },
        {
          id:'chat3',
        text:"TeleConnect Companion (Streamlit)",
        link:"https://fm-telecom.streamlit.app/"
        },
    ]
    },
    // {
    //   name:"Bigdator",
    //   image:image3,
    //   detailsParagraphs:["Bigdator is our big data tool meant to analyse large amount of unstructured & structured data on the go. By using Bigdator’s various modules, users can do analysis on the data available in public domain like news articles, social media like Facebook pages and on internal text data.",
    //   ],
    //   subHeading:"The various modules in Bigdator are :",
    //   list:["Newsrator: News, Articles, Blogs analysis for company/sector analysis and sentiments",
    //     "Sociometor: Social media analytics for knowing customer",
    //     "Textrator: Analyse large unstructured text for dejargonising the incomprehensible text and narrations",
    //   ],
    //   buttonText:"Try Bigdator"
    // },
  ]
