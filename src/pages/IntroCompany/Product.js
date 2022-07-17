import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import './Product.css';
const Product = () => {
	return (
		<>
			<Box className='product'>
				<Container>
					<Grid container spacing={4}>
						<Grid item md={6}>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#1a47ac',
								}}>
								CÁC SẢN PHẨM DỊCH VỤ CHÍNH CỦA TSC6
							</Typography>
							<Typography
								sx={{
									margin: '10px 0px',
									fontWeight: 'bold',
									fontStyle: 'italic',
									color: 'rgb(0,166,81)',
								}}>
								DỊCH VỤ QUẢN LÝ BẤT ĐỘNG SẢN
							</Typography>
							<Grid container spacing={1}>
								<Grid item md={4}>
									<Box className='h11'></Box>
									<Typography
										sx={{
											margin: '10px 0px',
											fontWeight: 'bold',
											fontStyle: 'italic',
											color: 'rgb(0,166,81)',
										}}>
										QUẢN LÝ CHUNG CƯ
									</Typography>
								</Grid>
								<Grid item md={4}>
									<Box className='h22'></Box>
									<Typography
										sx={{
											margin: '10px 0px',
											fontWeight: 'bold',
											fontStyle: 'italic',
											color: 'rgb(0,166,81)',
										}}>
										QUẢN LÝ VĂN PHÒNG
									</Typography>
								</Grid>
								<Grid item md={4}>
									<Box className='h33'></Box>
									<Typography
										sx={{
											margin: '10px 0px',
											fontWeight: 'bold',
											fontStyle: 'italic',
											color: 'rgb(0,166,81)',
										}}>
										QUẢN LÝ BĐS KHÁC
									</Typography>
								</Grid>
							</Grid>
							<Typography sx={{ margin: '5px 0px' }}>
								Với đội ngũ nhân sự được đào tạo quản lý chuyên nghiệp và giàu
								kinh nghiệm trong lĩnh vực quản lý BĐS, TSC6 là công ty có đầy
								đủ khả năng cung cấp đầy đủ các dịch vụ quản lý cho nhiều loại
								hình BĐS. Tùy thuộc vào quy mô và loại hình BĐS, TSC6 sẽ có các
								giải pháp tối ưu, nhằm mang đến các giá trị cao nhất, phù hợp
								với mong muốn của Quý khách hàng và đối tác. TSC6 có thể tham
								gia để cung cấp dịch vụ ngay từ giai đoạn thực hiện dự án cho
								đến khi kết thúc xây dựng đưa công trình của dự án vào khai thác
								sử dụng.
							</Typography>
							<Box className='h4' mt={3}></Box>
						</Grid>
						<Grid item md={6}>
							<Grid container spacing={2}>
								<Grid item md={12}>
									<Typography
										sx={{
											margin: '10px 0px',
											fontWeight: 'bold',
											fontStyle: 'italic',
											color: 'rgb(0,166,81)',
										}}>
										SÀN BẤT ĐỘNG SẢN
									</Typography>
								</Grid>
								<Grid item md={6}>
									<Box className='h5'></Box>
								</Grid>
								<Grid item md={6}>
									<Box className='h6'></Box>
								</Grid>
								<Grid item md={12}>
									<Box className='h7'></Box>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item md={12} mt={3}>
									<Typography
										sx={{
											margin: '10px 0px',
											fontWeight: 'bold',
											fontStyle: 'italic',
											color: 'rgb(0,166,81)',
										}}>
										DỊCH VỤ MÔI GIỚI BẤT ĐỘNG SẢN
									</Typography>
								</Grid>
								<Grid item md={6}>
									<Box className='h8'></Box>
								</Grid>
								<Grid item md={6}>
									<Box className='h9'></Box>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Product;
