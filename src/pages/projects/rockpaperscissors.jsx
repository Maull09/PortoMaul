import React from 'react'
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { FiClock} from 'react-icons/fi';
import ImagePlaceholder from '../../images/rcs.png'
import {
  FiGithub
} from 'react-icons/fi';

const RockPaperScissors = () => {
  
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
          Deep Learning for Hand Gesture Recognition: A Convolutional Neural Network Approach to Rock, Paper, Scissors Image Classification
          </p>
          <div className="flex">
            <div className="flex items-center mr-10">
              <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                10 August 2023
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
                  alt="TimeSeriesForecasting"
                />
              </div>
        </div>


        {/* PROJECT INFO */}
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-justify">
        {/* Single project social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            See The Project
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href= "https://github.com/Maull09/rockpaperscissors"
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
          Deep Learning for Hand Gesture Recognition: A Convolutional Neural Network Approach to Rock, Paper, Scissors Image Classification
          </p>
              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project showcases a machine learning solution for classifying images into rock, scissor, or paper categories. It leverages the power of TensorFlow and Keras to build a sophisticated image recognition model. This project is an excellent demonstration of practical application of deep learning in image classification.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The model is trained on a dataset containing images categorized into rock, paper, and scissors. Essential Python libraries such as TensorFlow, Keras, Pandas, NumPy, and Matplotlib are utilized for data manipulation, model building, and visualization. The TensorFlow Keras API facilitates the creation and training of the deep learning model, while data augmentation techniques enhance the model's ability to generalize from the dataset.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The methodology involves preprocessing the images, followed by the creation of a convolutional neural network (CNN) using TensorFlow's Keras API. Data augmentation techniques like rotation, width and height shifts, shear, zoom, and horizontal flipping are applied to increase the diversity of the training data, improving the robustness of the model. The model comprises layers such as Conv2D, MaxPooling2D, Flatten, Dense, and Dropout to optimize performance.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              The model demonstrates high accuracy in classifying the images into the respective categories of rock, paper, and scissors. The successful application of this model can be seen as a stepping stone in the field of image recognition and can be extended to more complex image classification tasks in the future.
              </p>

              <p
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
              This project not only highlights the proficiency in using deep learning for image classification but also underscores the practical implications of such models in real-world scenarios. The model's adaptability and accuracy present a significant contribution to the evolving field of machine learning and artificial intelligence.
              </p>
        </div>
      </div>
				
        <ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
  )
}

export default RockPaperScissors