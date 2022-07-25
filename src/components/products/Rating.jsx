import validRating from '../../helpers/validRating';

const Rating = ({rating}) => {
    const ratingClasses = {
        Positive: 'btn-success',
        Mixed: 'btn-warning',
        Negative: 'btn-danger'
    };

    const ratingColor = () => {
        if (rating >= 70){
            return ratingClasses.Positive;
        } else if (rating >= 50 || rating <= 69){
            return ratingClasses.Mixed;
        }
        return ratingClasses.Negative;
    }

    return ( 
        <button type="button" className={'btn ' + ratingColor()}>{rating}%</button>
    );
}

Rating.propTypes = {
    rating: validRating
}

export default Rating;