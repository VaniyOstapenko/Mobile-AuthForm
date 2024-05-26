import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0F4F3',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        gap: 15,
        marginTop: 15
    },
    inp: {
        borderRadius: 8,
        border: '1px solid black',
        width: '90%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        color: '#64748B',
        borderBlockColor: '#E2E8F0',
        borderLeftColor: '#E2E8F0',
        borderRightColor: '#E2E8F0',
        fontFamily: 'Inter400',
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: '#FFFFFF'
    },
    already: {
        fontFamily: 'Inter700',
        fontSize: 16,
        fontWeight: 700,
        color: '#7E49FF'
    },
    agree: {
        width: '90%',
        height: 50,
        paddingTop: 16,
        paddingLeft: 95,
        backgroundColor: '#F1F5F9',
        fontFamily: 'Inter700',
        fontSize: 16,
        fontWeight: 700,
        color: '#CBD5E1'
    }
})

export default styles;