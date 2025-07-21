import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const NavButton = ({ message, route }) => {
    const navigation = useNavigation()

    return ( 
         <Button
            mb={'7'}
            pb={'2.5'}
            pt={'1.5'}
            variant={'ghost'}
            
            onPress={() => navigation.navigate(route)}
        >
            {message}
        </Button>
     );
}
 
export default NavButton;