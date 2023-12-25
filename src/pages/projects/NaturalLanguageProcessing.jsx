import React from 'react'

import ProjectGallery from '../../components/projects/ProjectGallery';
import ProjectHeader from '../../components/projects/ProjectHeader';
import ProjectInfo from '../../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock, FiTag } from 'react-icons/fi';

import ImagePlaceholder from '../../images/sentimentanalisis2.jpg'
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
  FiGithub
} from 'react-icons/fi';
const NaturalLanguageProcessing = () => {
  return (
    <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>

        {/* PROJECT HEADER */}
        <div>
          <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          Natural Language Processing for Sentiment Analysis Using Bidirectional GRU 
          </p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                1 January 2024
              </span>
            </div>
          </div>
        </div>

        {/* PROJECT GALLERY */}
        <div className="grid grid-cols-1 sm:gap-10 mt-12">
              {/* Awalnya ada md:grid-cols-3 */}
              <div className="mb-10 sm:mb-0">
                <img
                  src={ImagePlaceholder}
                  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                  style={{ width: '100%', height: '100%' }}
                  alt="NaturalLanguageProcessing"
                />
              </div>
        </div>

        {/* PROJECT INFO */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            See The Project
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href= "https://github.com/Maull09/PortoMaul/"
              target="__blank"
              aria-label="Share Project"
              className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >
              <span className="text-lg lg:text-2xl">
                <FiGithub/>
              </span>
            </a>
          </div>
        </div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          Natural Language Processing for Sentiment Analysis Using Bidirectional GRU .
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project focuses on sentiment analysis using Natural Language Processing (NLP) with Bidirectional Gated Recurrent Unit (BiGRU) methodology. We aim to identify and interpret public opinions, emotions, and attitudes expressed on social media, particularly Twitter. The primary objective is to gain deeper insights into public sentiment on crucial issues, leveraging Twitter as a rich source of information.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The BiGRU method, a type of neural network architecture, is utilized for effectively capturing the context of words in both forward and backward directions. This allows for a more comprehensive and accurate analysis of sentiment within texts. Data preprocessing steps, including cleaning and normalizing data, are critical in preparing the data for analysis. This project emphasizes not only the technical aspects but also the importance of understanding linguistic context and nuances.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              We implemented the BiGRU model to analyze Indonesian language texts from Twitter. With a dataset containing a range of emotions such as joy, anger, fear, love, and sadness, we successfully developed a model capable of classifying emotions with satisfying accuracy. Model evaluation was conducted using metrics such as precision, recall, and F1-score, ensuring that the results are not only accurate but also relevant and meaningful.
              </p>
              
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The results of this project demonstrate that the BiGRU model is effective in classifying text into various emotional classes. The accuracy achieved reflects the model's ability to understand nuances and context of emotions in the text. This information is invaluable for organizations and governments to understand public sentiment, aiding in more accurate decision-making and improving the quality of social interactions and public services.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              In conclusion, this project successfully applies NLP technology in a highly relevant and contemporary context. The use of BiGRU model in sentiment analysis offers profound and accurate insights into public attitudes and feelings. It paves the way for various other applications of this technology, not just in social media analysis but also in many other fields where a deep understanding of public sentiment is crucial.
              </p>
        </div>
      </div>
				
        <ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default NaturalLanguageProcessing