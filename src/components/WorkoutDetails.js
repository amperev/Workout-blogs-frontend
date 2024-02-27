import React from 'react'

function WorkoutDetails({workout}) {
  return (
    <div className="workout-details">
        <p>{workout.title}</p>
        <p><strong>Load (kg):</strong> {workout.load}</p>
        <p><strong>Reps:</strong> {workout.reps}</p>
        <p>{workout.createdAt}</p>
        <br />
    </div>
  )
}

export default WorkoutDetails