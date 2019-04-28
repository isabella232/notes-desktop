import * as React from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import * as Icons from '@material-ui/icons'


interface ScreenProps {
  style: React.CSSProperties
  buttonStyle: React.CSSProperties
  toggleDrawer: () => void
  clearNote: () => void
  deleteNote: () => void
  saveAndSelectNote: () => void
  requiresSave?: boolean
}
export default class AppMenu extends React.Component<ScreenProps, object> {
  cloudUpdateIcon = () => {
    if (this.props.requiresSave) {
      return (
        <Icons.CloudDone style={{...this.props.buttonStyle}} />
      )
    } else {
      return (
        <Icons.CloudUpload onClick={this.props.saveAndSelectNote} style={this.props.buttonStyle} />
      )
    }
  }
  public render() {
    return (
      <div style={this.props.style}>
          <Tooltip title={'Drawer'}>
            <Icons.Menu onClick={this.props.toggleDrawer} style={{...this.props.buttonStyle, marginRight: 20}} />
          </Tooltip>
          <Tooltip title={'Delete'}>
            <Icons.Delete onClick={this.props.deleteNote} style={this.props.buttonStyle} />
          </Tooltip>
          <Tooltip title={'New'}>
            <Icons.FiberNew onClick={this.props.clearNote} style={this.props.buttonStyle} />
          </Tooltip>
          <Tooltip title={'Save'}>
            {this.cloudUpdateIcon()}
          </Tooltip>
      </div>
    )
  }
}