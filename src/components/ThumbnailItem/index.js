// Write your code here.
import './index.css'

const ThumbnaliItem = props => {
  const {item, onChange2, isActive} = props
  const {id, imageUrl, thumbnailAltText} = item
  const ActiveClassName = isActive ? 'active' : ' '
  const onChange1 = () => {
    onChange2(id)
  }
  return (
    <div className="li1">
      <button
        className={`btn1 ${ActiveClassName}`}
        type="button"
        onClick={onChange1}
      >
        <img src={imageUrl} alt={thumbnailAltText} className="img2" />
      </button>
    </div>
  )
}
export default ThumbnaliItem
