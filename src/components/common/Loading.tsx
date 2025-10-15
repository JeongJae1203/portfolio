import loading from '../../assets/images/loading/loading.gif'
import LoadingStyle from './Loading.module.scss'

const Loading = () => {
  return (
    <div className={ LoadingStyle.loading }>
      <img src={ loading } alt="loading" />
      <h3>잠시만 기다려주세요 ... 🤗</h3>
    </div>
  )
}

export default Loading
