import { connect } from 'react-redux'
import App from '../component/App'

// store から必要なstateを取り出して、Componentのpropsに紐づける関数
function mapStateToProps(state) {
    return state
}

// Action の Dispatch を行う処理をこの関数内に閉じる。コンポーネントから dispatch を隠蔽
function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
