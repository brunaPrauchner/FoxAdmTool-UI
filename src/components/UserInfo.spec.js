import UserInfo from './UserInfo';
import { shallow } from 'enzyme';

describe('UserInfo', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<UserInfo />)
    expect(wrapper.exists()).toBe(true)
  });

  // it('renders name, email, cpf from User', () => {
  //   const wrapper = shallow(<UserInfo />);;
  //   //  expect(wrapper.find('div').childAt(5).text()).toEqual('Bruna Goods');
  //   //  expect(wrapper.find('div').childAt(6).text()).to.equal('b@yopmail.com');
  //   //  expect(wrapper.find('div').childAt(7).text()).to.equal('12345678911');
  // });

  // it('renders values from User even with one value missing', () => {
  //   const wrapper = shallow(<UserInfo />);;
  //   //  expect(wrapper.find('div').childAt(5).text()).toEqual('Bruna Goods');
  //   //  expect(wrapper.find('div').childAt(6).text()).to.equal(' ');
  //   //  expect(wrapper.find('div').childAt(7).text()).to.equal('12345678911');
  // });
});