import DesktopComponent, {
  universalPropTypes,
  universalDefaultProps,
} from './DesktopComponent';
import libui from 'libui-node';
import PropTypes from 'prop-types';

class HorizontalSeparator extends DesktopComponent {
  constructor(root, props) {
    super(root, props);
    this.root = root;
    this.props = { ...props };
    this.setDefaults(props);
    this.newElement();
    this.initialProps(this.props);
  }

  newElement() {
    this.element = new libui.UiHorizontalSeparator();
  }

  render(parent) {
    this.addParent(parent);
    this.renderChildNode();
  }
}

HorizontalSeparator.propTypes = {
  ...universalPropTypes,
  enabled: PropTypes.bool,
  visible: PropTypes.bool,
};

HorizontalSeparator.defaultProps = {
  ...universalDefaultProps,
  enabled: true,
  visible: true,
};

export default HorizontalSeparator;
