import { shallow } from 'enzyme';
import Users from './Users';

describe('Users', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Users />);
    expect(wrapper.exists()).toBe(true);
  })
 
  it("renders a label", ()=> {
    const wrapper = shallow(<Users />);
    const label = 'Click name to go to User Details'
    expect(wrapper.find('h2').text()).toBe(label);
});

  it("renders a UserInfo component on a list when user exists", ()=> {
    const wrapper = shallow(<Users />);
    //expect(wrapper.find('ul')
  })

  it("renders an empty list when no users", ()=> {
    const wrapper = shallow(<Users />);
    //expect(wrapper.find('ul')
  })


});