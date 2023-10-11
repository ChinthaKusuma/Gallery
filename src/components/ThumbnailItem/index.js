// Write your code here.
import './index.css'

const ThumbnaliItem = props => {
  const {item, onChange2, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = item
  const ActiveClassName = isActive ? 'active' : ' '
  const onChange1 = () => {
    onChange2(id)
  }
  return (
    <li className="li1">
      <button
        className={`btn1 ${ActiveClassName}`}
        type="button"
        onClick={onChange1}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="img2" />
      </button>
    </li>
  )
}
export default ThumbnaliItem
