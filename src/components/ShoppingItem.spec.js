import ShoppingItem from './ShoppingItem';
import {shallow} from 'enzyme';

describe('ShoppingItem', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<ShoppingItem/>);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders ShoppingItem component with name, value and amount', () => {
        const wrapper = shallow(<ShoppingItem/>);
        //expect(wrapper.find());
    });

    it('renders ShoppingItem component with values even with one value missing', () => {
        const wrapper = shallow(<ShoppingItem/>);
        //expect(wrapper.find());
    });
})