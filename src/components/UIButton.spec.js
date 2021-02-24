import { shallow } from 'enzyme';
import UIButton from './UIButton';

describe('UIButton', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<UIButton />);
    expect(wrapper.exists()).toBe(true);
  })

  it('renders a button with label', () => {
    const wrapper = shallow(<UIButton text='Show Users' />);
    expect(wrapper.find('button').text()).toBe('Show Users');
  })

  it('when button clicked execute a function', () => {
    const onClickMock = jest.fn()
    const wrapper = shallow(<UIButton handleOnClick={onClickMock} />);
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  })
});