import { useButton } from '@react-aria/button';

// Inside your component
const { isDisabled } = useButton(/* other parameters */);

// In your button component
<button disabled={isDisabled}>Your Button</button>
