import React, { useState, useRef } from "react";
import { View, StyleSheet, Image, Pressable, Text, Button, Linking } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library'; 
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function CameraApp() {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const [mediaPermissao, pedirMediaPermissao] = MediaLibrary.usePermissions(); 
    const [foto, setFoto] = useState(null);
    const [cameraType, setCameraType] = useState("back");
    const [scanned, setScanned] = useState(false);
    const cameraRef = useRef(null);

    if (!permissao) {
        return <View></View>;
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para utilizar a câmera</Text>
                <Button title="Dar Permissão" onPress={pedirPermissao} />
            </View>
        );
    }

    if (!mediaPermissao?.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.textpermission}>Você precisa autorizar o aplicativo para salvar fotos na galeria</Text>
                <Button title="Dar Permissão para Galeria" onPress={pedirMediaPermissao} />
            </View>
        );
    }

    const tirarFoto = async () => {
        const fotoTirada = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        });
        setFoto(fotoTirada);
    };

    const salvarFoto = async () => {
        if (foto && mediaPermissao.granted) {
            const asset = await MediaLibrary.createAssetAsync(foto.uri);
            await MediaLibrary.createAlbumAsync('Camera', asset, false);
            alert('Foto salva na galeria!');
            setFoto(null);
        }
    };

    const descartarFoto = () => {
        setFoto(null);
    };

    const alternarCamera = () => {
        setCameraType((prevCameraType) => (prevCameraType === "back" ? "front" : "back"));
    };

    const escanearQRCode = ({ type, data }) => {
        setScanned(true);
        alert(`Código QR escaneado: ${data}`);
        Linking.openURL(data).catch(err => console.error('Erro ao abrir URL:', err));

        // Reseta o estado após 3 segundos para permitir novos scans
        setTimeout(() => setScanned(false), 3000);
    };

    return (
        <View style={styles.container}>
            {!foto ? (
                <CameraView
                    facing={cameraType}
                    style={styles.camera}
                    ref={cameraRef}
                    onBarCodeScanned={scanned ? undefined : escanearQRCode}
                >
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={alternarCamera} style={styles.switchButton}>
                            <Image
                                source={require('./alternar.png')}
                                style={styles.switchImage}
                            />
                        </Pressable>
                        <Pressable onPress={tirarFoto} style={styles.cameraButtonContainer}>
                            <Image
                                source={require('./button.png')}
                                style={styles.cameraButton}
                            />
                        </Pressable>
                    </View>
                </CameraView>
            ) : (
                <>
                    <Image source={{ uri: foto.uri }} style={styles.preview} />
                    <View style={styles.controls}>
                        <Pressable style={styles.button} onPress={salvarFoto}>
                            <Text style={styles.text}>Salvar</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={descartarFoto}>
                            <Text style={styles.text}>Descartar</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    cameraButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    switchButton: {
        justifyContent: 'flex-start',
    },
    switchImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    preview: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#000',
        fontSize: 16,
    },
    textpermission: {
        textAlign: 'center',
        color: '#fff',
    },
});
