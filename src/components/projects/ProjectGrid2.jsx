import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

// Import images
import WebImage1 from '../../images/web-project-1.jpg';
import WebImage2 from '../../images/web-project-2.jpg';
import MobileImage1 from '../../images/mobile-project-1.jpg';
import MobileImage2 from '../../images/mobile-project-2.jpg';
import UIImage1 from '../../images/ui-project-1.jpg';
import UIImage2 from '../../images/ui-project-2.jpg';

const projects = [
  {
		id: 1,
		title: 'UTBK Score Analysis',
		category: 'Analyzed the distribution of UTBK scores to enter STEI-K ITB using python pandas and excel.',
		img: WebImage2,
		href: '/utbk-score-analysis',
	},
	{
		id: 2,
		title: 'AirBnB Analysis',
		category: 'Analyzed the AirBnB dataset in Seattle during 2016 using Tableau.',
		img: MobileImage2,
		href: '/airbnb-analysis',
	},
	{
		id: 3,
		title: 'Predicting Credit Card Approvals',
		category: 'Built an automatic credit card approval predictor using machine learning techniques.',
		img: UIImage1,
		href: '/credit-card-approval-predictor',
	},
	{
		id: 4,
		title: 'Automated Traffic Condition Monitoring for Accident Detection Using YOLOv8',
		category: 'Conducted research and built object detection model to infer possible anomaly made using YOLOv8.',
		img: UIImage2,
		href: '/automated-traffic-condition-monitoring',
	},
	{
		id: 5,
		title: 'Natural Language Processing for Sentiment Analysis Using Bidirectional GRU',
		category: 'Conducted research and built model for NLP sentiment analysis from tweets using bidirectional GRU.',
		img: MobileImage1,
		href: '/nlp-sentiment-analysis',
	},
	{
		id: 6,
		title: 'Quantitiy Prediction And Customer Segmentation',
		category: 'Implemented a model for quantity prediction using regression techniques and segmented customers into distinct clusters using k-means clustering.',
		img: WebImage1,
		href: '/quantity-prediction-and-customer-segmentation',
	},
]

const ProjectsGrid2 = () => {

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{	projects.map((project) => (
							<ProjectSingle
								title={project.title}
								category={project.category}
								image={project.img}
								key={project.id}
								href={project.href}
							/>
					  ))}
			</div>
		</section>
	);
};

export default ProjectsGrid2;
