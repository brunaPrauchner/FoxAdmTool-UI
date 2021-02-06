import {shallow} from 'enzyme';
import UserForm from './UserForm';

describe('UserForm', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<UserForm/>);
        expect(wrapper.exists()).toBe(true);
    });

    it("renders a label with Find User by CPF", ()=> {
        const wrapper = shallow(<UserForm />);
        const label = 'Find User by CPF'
        expect(wrapper.find('h2').text()).toBe(label);
    });

    it("renders a form input with cpf as unique identifier", ()=> {
        const wrapper = shallow(<UserForm />);
        expect(wrapper.find('form input').prop('name')).toEqual('cpf');
    });
    
    it("renders a form input with cpf as a placeholder", ()=> {
        const wrapper = shallow(<UserForm />);
        expect(wrapper.find('form input').prop('placeholder')).toEqual('CPF');
    });

    it("renders a submit button", ()=> {
        const wrapper = shallow(<UserForm />);
        expect(wrapper.find('button').text()).toEqual('Submit');
        expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it("renders an error message for input not valid", ()=> {
        const wrapper = shallow(<UserForm />);
        //expect(wrapper.find('button').text()).toEqual('Submit');
        //expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it("renders an error message for input valid and user not found", ()=> {
        const wrapper = shallow(<UserForm />);
        //expect(wrapper.find('button').text()).toEqual('Submit');
        //expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it("renders an error message for input valid and unexpected error", ()=> {
        const wrapper = shallow(<UserForm />);
        //expect(wrapper.find('button').text()).toEqual('Submit');
        //expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it("input valid not renders an error", ()=> {
        const wrapper = shallow(<UserForm />);
        //expect(wrapper.find('button').text()).toEqual('Submit');
        //expect(wrapper.find('button').prop('type')).toEqual('submit');
    });

    it("input valid and users exists goes to User page", ()=> {
        const wrapper = shallow(<UserForm />);
        //expect(wrapper.find('button').text()).toEqual('Submit');
        //expect(wrapper.find('button').prop('type')).toEqual('submit');
    });
});