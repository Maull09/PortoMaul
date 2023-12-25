// Import images
import WebImage1 from '../images/qtyandcs.jpg';
import WebImage2 from '../images/Statistik Lengkap UTBK STEI-K22.png';
import MobileImage1 from '../images/sentimentanalisis.jpg';
import MobileImage2 from '../images/airbnb.jpg';
import UIImage1 from '../images/credit_card.jpg';
import UIImage2 from '../images/Cover (3).png';
import UIImage3 from '../images/speed.jpg';
import UIImage4 from '../images/telecom.jpg';

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
		img: UIImage3,
		href: '/time-series-forecasting',
	},
	{
		id: 8,
		title: 'Customer Segmentation and Churn Prediction: Strategies for Optimizing Customer Retention in the Telecommunications Industry ',
		category: 'Developed a comprehensive customer segmentation and churn prediction strategy to enhance customer retention in the telecommunications industry.',
		img: UIImage4,
		href: '/customer-segmentation-and-churn-prediction',
	}
];
