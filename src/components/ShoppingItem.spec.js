import ShoppingItem from './ShoppingItem';
import { shallow } from 'enzyme';

describe('ShoppingItem', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ShoppingItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a list of items with name, sku and price', () => {
    const wrapper = shallow(<ShoppingItem />);
    expect(wrapper.find('ul'));
  });

  // it('renders ShoppingItem component with values even with one value missing', () => {
  // });
})