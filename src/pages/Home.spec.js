import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
  })
 
  it("renders a button with Show All Users", ()=> {
    const wrapper = shallow(<Home />);
    const buttonText = 'Show All Users'
    expect(wrapper.find('UIButton').prop('text')).toBe(buttonText);
  })

  it("renders a user form", ()=> {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('UserForm').exists()).toBe(true);
  })

  it("after clicking Show All Users button goes to Users page", ()=> {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Link#users-page-link').prop('to')).toBe('users');
    expect(wrapper.find('Link#users-page-link UIButton').exists()).toBe(true);
  })


});