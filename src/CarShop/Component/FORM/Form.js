import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    Avatar,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { Toast } from 'bootstrap';
import axios from 'axios';
import { API_URL } from '../../../config';
import { toast } from 'react-toastify';

export default function Form({ open, onClose, onSave, initialData }) {
    // initialData: đối tượng để edit, hoặc null để thêm mới

    const [formData, setFormData] = useState({
        hinhAnh: '',
        tenSP: '',
        maSP: '',
        loai: '',
        giaTien: '',
        mucdohienthi: '',
        id: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            // reset khi thêm mới
            setFormData({
                hinhAnh: '',
                tenSP: '',
                loai: '',
                giaTien: '',
                mucdohienthi: '',
                id: '',
            });
        }
    }, [initialData, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(formData);

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = async (buttonText) => {
        if (buttonText === 'Lưu') {
            onSave(formData);
        } else if (buttonText === 'Thêm') {
            try {
                if (formData.hinhAnh.trim() != "" && formData.tenSP.trim() != "" && formData.loai.trim() != "" && formData.giaTien.trim() != "" && formData.mucdohienthi.trim() != "") {
                    const response = await axios.post(`${API_URL}`, formData);
                    toast.success("Thêm sản phẩm thành công");
                    window.location.reload();
                } else {
                    toast.error("Vui lòng điền đầy đủ thông tin");
                    return;
                }

            } catch (error) {
                console.error("Error for", error);
                toast.error("Thêm sản phẩm thất bại");

            }

        } else {
            Toast.error('Unknown action');
        }



    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{initialData ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm'}</DialogTitle>
            <DialogContent>
                <Box component="form" noValidate autoComplete="off" sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Image URL"
                        name="hinhAnh"
                        value={formData.hinhAnh}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Tên Sản Phẩm"
                        name="tenSP"
                        value={formData.tenSP}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Mã Sản Phẩm"
                        name="maSP"
                        value={formData.maSP}
                        onChange={handleChange}
                        fullWidth
                    />
                    <InputLabel id="select-label">Chọn loại sản phẩm</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={formData.loai}
                        onChange={handleChange}
                        name='loai'
                        label="Chọn loại sản phẩm"
                    >
                        <MenuItem value="phutung">Phụ tùng</MenuItem>
                        <MenuItem value="phukien">Phụ kiện</MenuItem>
                        <MenuItem value="detail">Detail</MenuItem>
                        <MenuItem value="daituxe">Đại tu xe</MenuItem>
                    </Select>
                    <TextField
                        label="Giá Tiền"
                        name="giaTien"
                        value={formData.giaTien}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                    />
                    <InputLabel id="select-label">Chọn mức độ hiển thị</InputLabel>
                    <Select
                        labelId="select-label"
                        id="select"
                        value={formData.mucdohienthi}
                        onChange={handleChange}
                        name='mucdohienthi'
                        label="Chọn loại sản phẩm"
                    >
                        <MenuItem value="product">Product</MenuItem>
                        <MenuItem value="sale">Sale</MenuItem>
                    </Select>
                    <TextField
                        label="Key"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        disabled={true}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={(e) => handleSubmit(e.currentTarget.textContent)}>{initialData ? 'Lưu' : 'Thêm'}</Button>
            </DialogActions>
        </Dialog>
    );
}
