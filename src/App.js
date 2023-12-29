import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

// Import file project 
import AirbnbAnalysis from './pages/projects/AirbnbAnalysis.jsx';
import AutomatedTraffic from './pages/projects/AutomatedTraffic';
import NaturalLangaugeProcessing from './pages/projects/NaturalLanguageProcessing';
import PredictingCCApprovals from './pages/projects/PredictingCCApprovals';
import QuantityPrediction from './pages/projects/QuantityPrediction';
import TimeSeriesForecasting from './pages/projects/TimeSeriesForecasting';
import UtbkScoreAnalysis from './pages/projects/UtbkScoreAnalysis.jsx';
import DataChallenge from './pages/projects/datachallenge.jsx';
import RockPaperScissors from './pages/projects/rockpaperscissors.jsx';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>
							<Route 
								path="projects/utbk-score-analysis"
								element={<UtbkScoreAnalysis />}
							/>
							<Route 
								path="projects/airbnb-analysis"
								element={<AirbnbAnalysis />}
							/>
							<Route 
								path="projects/credit-card-approval-predictor"
								element={<PredictingCCApprovals />}
							/>
							<Route
								path="projects/automated-traffic-condition-monitoring"
								element={<AutomatedTraffic />}
							/>
							<Route
								path="projects/nlp-sentiment-analysis"
								element={<NaturalLangaugeProcessing />}
							/>
							<Route
								path="projects/quantity-prediction-and-customer-segmentation"
								element={<QuantityPrediction />}
							/>
							<Route
								path="projects/time-series-forecasting"
								element={<TimeSeriesForecasting />}
							/>
							<Route
								path="projects/customer-segmentation-and-churn-prediction"
								element={<DataChallenge />}
							/>
							<Route
								path = "projects/rock-paper-scissors"
								element = {<RockPaperScissors />}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
