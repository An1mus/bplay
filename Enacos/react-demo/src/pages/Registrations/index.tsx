import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Registration.scss';
import RegistrationTable from '../components/RegistrationTable';
import RegistrationView from '../components/RegistrationView';

interface Props {
}

const Registrations: React.FC<Props> = () => {
	return <div className={'registration'}>
		<Routes>
			<Route path={'/'} Component={RegistrationTable} />
			<Route path={'/:ref'} Component={RegistrationView} />
		</Routes>
	</div>;
}

export default Registrations;
