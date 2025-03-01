import './Copyright.scss';

function Copyright() {
  return (
    <div className="copyright" data-testid="copyright">
      <div className="copyright__link">
        <span className="copyright__text">Foo</span>
        <span className="copyright__text">die</span>
        <svg
          className="copyright__image"
          width="27"
          height="34"
          aria-hidden="true"
          focusable="false"
        >
          <use href="images/icons/stack.svg#partner"></use>
        </svg>
      </div>
    </div>
  );
}

export default Copyright;
