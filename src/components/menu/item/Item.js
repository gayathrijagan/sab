import './item.scss';

const Item = ({item}) => {
    return (
        <div className="menuItem">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default Item;