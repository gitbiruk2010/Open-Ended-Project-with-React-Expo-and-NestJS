import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TaskContext } from '../contexts/TaskContext';

const TaskManager = () => {
    const { tasks, addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    const navigation = useNavigation();

    useEffect(() => {
        setFilteredTasks(tasks.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, tasks]);

    const handleAddTask = () => {
        if (isAdding) {
            addTask(title, description);
            setTitle('');
            setDescription('');
            setIsAdding(false);
        } else {
            setIsAdding(true);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0B204D" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Task Manager</Text>
                {isAdding ? (
                    <TouchableOpacity style={styles.saveButton} onPress={handleAddTask}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                )}
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            {isAdding && (
                <>
                    <TextInput
                        style={[styles.input, styles.titleInput]}
                        placeholder="Title"
                        value={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                    <TextInput
                        style={[styles.input, styles.descriptionInput]}
                        placeholder="Description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        multiline
                    />
                </>
            )}
            {!isAdding && (
                <ScrollView style={styles.scrollContainer}>
                    {filteredTasks.map((task) => (
                        <TouchableOpacity
                            key={task.id}
                            style={styles.taskContainer}
                            onPress={() => navigation.navigate('TaskDetails', { task })}
                        >
                            <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B2844', // Darker navy color
        padding: 20,
        paddingBottom: 50,
    },
    header: {
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 16,
        color: '#1B2844', // Darker navy color
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
    searchInput: {
        borderWidth: 2,
        // borderColor: 'black',
        borderRadius: 30,
        padding: 15,
        marginBottom: 10,
        backgroundColor: 'lightgray',
    },
    scrollContainer: {
        flex: 1,
    },
    input: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 25,
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
        borderRadius: 0,
    },
    taskContainer: {
        marginBottom: 20,
        backgroundColor: 'teal',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#1B2844', // Darker navy color
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'red',
    },
});

export default TaskManager;