import User from './User';
import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    state: {
      user: {
        nameuser: 'Bruna Goods',
        emailuser: 'b@yopmail.com',
        cpfuser: '12345678911',
        query: []
      }
    }
  })
}))

describe('User', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders UserInfo component with name, email, cpf', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('UserInfo').exists()).toBe(true);
    expect(wrapper.find('UserInfo').prop('name')).toBe('Bruna Goods');
    expect(wrapper.find('UserInfo').prop('email')).toBe('b@yopmail.com');
    expect(wrapper.find('UserInfo').prop('cpf')).toBe('12345678911');
  });

  it('renders a label Shopping List', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('div#shopping-label').text()).toBe('Shopping List');
  });

  it('renders ShoppingItem component with items', () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find('ShoppingItem').exists()).toBe(true);
    expect(wrapper.find('ShoppingItem').prop('arrayItems')).toEqual([]);
  });
});