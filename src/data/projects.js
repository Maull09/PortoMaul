// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
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
	{
		id: 7,
		title: 'Time Series Forecasting of Average Vehicle Speed Using the XGBoost Algorithm',
		category: 'Implemented time series forecasting to predict average vehicle speed utilizing the XGBoost algorithm.',
		img: WebImage1,
		href: '/time-series-forecasting',
	}
];
