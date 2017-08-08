import LTDropDown from '_components/dropdown/LTDropDown.jsx';
import { shallow } from 'enzyme';

describe('<LTDropDown />', () => {
    let shWrapper;
    let props;
    beforeEach(() => {
        const closeModalTeamContent = () => {}
        props = {
            setSeasonID: () => {},
            content: [{ name: '2016/2017', season_id: 1 }]
        }
        shWrapper = shallow(<LTDropDown {...props} />);
        shWrapperInst = shWrapper.instance();
    });
    it('should contain a DropdownButton wrapper with a respective title prop', () => {
        expect(shWrapper.find('DropdownButton').length).toEqual(1, 'wrapper should exits');
        const titleProp = shWrapper.find('DropdownButton').props().title.trim();
        expect(titleProp).toBe(props.content[0].name, 'title should match the prop name');
    });
    it('should contain a MenuItem wrapper with a respective text', () => {
        expect(shWrapper.find('MenuItem').length).toEqual(1, 'wrapper should exits');
        const menuItemText = shWrapper.find('MenuItem > span').text().trim();
        expect(menuItemText).toBe(props.content[0].name);
    });
    it('should call the props function "setSeasonID" when MenuItem "onClick" function is triggered', ()=>{
        spyOn(shWrapperInst, 'setSeasonsID').and.callThrough();
        shWrapper.find('MenuItem').props().onClick();
        expect(shWrapperInst.setSeasonsID).toHaveBeenCalled();
    });
});