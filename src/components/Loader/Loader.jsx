import { StyledLoader } from './Loader.style';
import { ReactComponent as LoaderImage } from '../../assets/images/loader.svg';


export default function Loader({ loading = false }) {

  if (!loading) return null;

  return (
    <StyledLoader>
      <LoaderImage />
    </StyledLoader>
  )
}
