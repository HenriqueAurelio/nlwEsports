import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

import logoImg from '../../assets/logo-nlw-esports.png'

import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { GameParms } from '../../@types/navigation';
import { Image, View, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard } from '../../components/DuoCard';


export function Game() {

    const route = useRoute();
    const navigation = useNavigation();
    const game = route.params as GameParms;

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20} />
                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo} />
                    <View style={styles.right} />
                </View>
                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode="cover" />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar" />
                <DuoCard />
            </SafeAreaView>
        </Background>

    );
}