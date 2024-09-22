import styles from "./List.module.css"
import PropTypes from "prop-types"

function List(props) {
    // const fruits = [
    //     {
    //         id: 1,
    //         name: "Apple",
    //         calories: 95
    //     },
    //     {
    //         id: 2,
    //         name: "Orange",
    //         calories: 45
    //     },
    //     {
    //         id: 3,
    //         name: "Banana",
    //         calories: 105
    //     },
    //     {
    //         id: 4,
    //         name: "Coconut",
    //         calories: 159
    //     },
    //     {
    //         id: 5,
    //         name: "Pineapple",
    //         calories: 37
    //     }
    // ]

    // const vegetables = [
    //     {
    //         id: 6,
    //         name: "Potatoes",
    //         calories: 110
    //     },
    //     {
    //         id: 7,
    //         name: "Celery",
    //         calories: 15
    //     },
    //     {
    //         id: 8,
    //         name: "Carrots",
    //         calories: 25
    //     },
    //     {
    //         id: 9,
    //         name: "Corn",
    //         calories: 63
    //     },
    //     {
    //         id: 10,
    //         name: "Broccoli",
    //         calories: 50
    //     }
    // ]


    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical Sort
    // fruits.sort((a, b) => a.calories - b.calories) // Numerical Sort

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)
    // const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b></li>)

    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100)
    // const listItems = highCalFruit.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b></li>)


    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>)


    const category = props.category
    const itemList = props.items

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;<b>{item.calories}</b></li>)

    return (
        <>
            <h3 className={styles.listCategory}>{category}</h3>

            <ol className={styles.listItems}>
                {listItems}
            </ol>
        </>
    )
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List