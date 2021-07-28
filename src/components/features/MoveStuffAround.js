import Ticker from 'react-ticker'

const MoveStuffAround = () => (
    <Ticker>
        {({ index }) => (
            <>
                <h1>This is the Headline of element #{"ecccccccc"}!</h1>
            </>
        )}
    </Ticker>
)

export default MoveStuffAround