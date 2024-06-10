import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({ route, navigation }) => {
    const { task } = route.params;
    const { updateTask, deleteTask } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const saveEdit = async () => {
        await updateTask(task.id, title, description);
        setIsEditing(false);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {isEditing ? (
                <>
                    <TextInput
                        style={[styles.input, styles.titleInput]}
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <TextInput
                        style={[styles.input, styles.descriptionInput]}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        multiline
                    />
                    <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={styles.title}>{task.title}</Text>
                    <Text style={styles.description}>{task.description}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
                            <Text style={styles.buttonText}>EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            deleteTask(task.id);
                            navigation.goBack();
                        }}>
                            <Text style={styles.buttonText}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3', // Light gray background
        padding: 20,
    },
    input: {
        borderWidth: 2,
        borderColor: 'tan',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    titleInput: {
        marginTop: 20,
        borderRadius: 0, // No border radius
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: 'top',
        borderRadius: 0, // No border radius
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000', // Black text
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
        color: '#000', // Black text
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 15,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#0B204D', // Darker navy color
        fontWeight: 'bold',
    },
    saveButton: {
        alignSelf: 'center',
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    saveButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TaskDetails;
