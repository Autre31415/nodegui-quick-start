const {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  StyleSheet
} = require('@nodegui/nodegui')

// instantiate new window
const win = new QMainWindow()

// set window size
win.resize(300, 100)

// create main window widget
const centralWidget = new QWidget()
centralWidget.setObjectName('root')

// setup flex layout
const rootLayout = new FlexLayout()
centralWidget.setLayout(rootLayout)

// create text label for hello world
const helloLabel = new QLabel()
helloLabel.setObjectName('helloLabel')
helloLabel.setText('Hello World!')

// create text label for dependency versions
const versionLabel = new QLabel()
versionLabel.setObjectName('versionLabel')
versionLabel.setText(`Node version: ${process.versions['node']} -- Qode version: ${process.versions['qode']}`)

// add label widgets to flex layout
rootLayout.addWidget(helloLabel)
rootLayout.addWidget(versionLabel)

// bind main widget to window
win.setCentralWidget(centralWidget)

// set widget styles
win.setStyleSheet(
  StyleSheet.create(
    `
      #root {
        background-color: #009688;
      }

      QLabel {
        qproperty-alignment: 'AlignCenter|AlignVCenter';
        margin: 2px;
      }

      #helloLabel {
        font-size: 16px;
        font-weight: bold;
      }

      #versionLabel {
        font-size: 12px;
      }
    `
  )
)

// render app window
win.show()

// keep global reference of window to prevent it from being garbage collected
global.win = win
