import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return(
        <View style={{'flex': 1, 'backgroundColor': '#1E1E1E', justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color='#7C3AED' />
        </View>
    );
}