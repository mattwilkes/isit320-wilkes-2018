import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('rest basic tests', function() {

    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders initial value of paragraph with state.nine', () => {
    const wrapper = shallow(<App/>);
    const unknown = <p className="App-intro">file: unknown</p>;
    expect(wrapper.contains(unknown)).toEqual(true);
});

});