/*
* Author Edward Seufert
*/
'use-strict';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import fuLogger from '../../../core/common/fu-logger';
import NotesView from '../../../memberView/social/notes/notes-view';
import BaseContainer from '../../../core/container/base-container';

function NotesContainer() {
	const itemState = useSelector((state) => state.notes);
	const session = useSelector((state) => state.session);
	const appPrefs = useSelector((state) => state.appPrefs);
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(actions.init());
	}, []);

	fuLogger.log({level:'TRACE',loc:'NotesContainer::render',msg:"Hi there"});
    return (
		<NotesView/>
	);
}

export default NotesContainer;
