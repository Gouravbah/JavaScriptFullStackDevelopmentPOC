import React, { useEffect, useState } from 'react';

// Redux imports
import { useDispatch } from "react-redux";
import { GetAction } from '../redux/action/action';

const Home = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);

    useEffect(() => {
        dispatch(GetAction()).then((res) => {
            if (res) {
                setData(res.data);
            } else {
                console.log("error")
            }
        });
    });

    return (
        <div className='home'>
            <h2 className='heading'>JavaScript Front End Development POC (Gourav Bahare).</h2>
            <tbody className="table table-bordered">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Web site</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
                {data && data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.website}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}

            </tbody>
        </div>
    )
}

export default Home