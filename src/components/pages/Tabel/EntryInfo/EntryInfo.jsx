import React, { useEffect, useState } from 'react'
import { Entry } from './Entry/Entry'

export const EntryInfo = ({entries, setEntries, getEntries}) => {
    useEffect(() => {
        getEntries()
    }, [])

    return (
        entries.length!==0 ?
        <div>
            <div style={{display:'flex'}}>
            {entries.map(entry => {
                return <Entry getEntries={getEntries} entries={entries} setEntries={setEntries} key={entry.timeEntryId} entry={entry}/>
            })}
            </div>
        </div>
        :
        <div>Нет отметок</div>
    )
}
