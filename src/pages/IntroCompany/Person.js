import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import './Person.css';

const Person = () => {
	return (
		<>
			<Container>
				<Box className='person'>
					<Grid container spacing={2}>
						<Grid item md={6}>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.3rem',
									fontWeight: 'bold',
									color: '#1a47ac',
								}}>
								SƠ ÐỒ TỔ CHỨC
							</Typography>
							<Box className='h1'></Box>
						</Grid>
						<Grid item md={6}>
							<Box className='h2'></Box>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.3rem',
									fontWeight: 'bold',
									color: '#1a47ac',
									marginTop: '80px',
								}}>
								NĂNG LỰC NHÂN SỰ
							</Typography>
							<Box className='icon'>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
								<Box className='h3'></Box>
							</Box>
							<Typography
								sx={{ marginTop: '20px', width: '50%', textAlign: 'justify' }}>
								Cơ cấu tổ chức của công ty được bố trí theo mô hình phù hợp, với
								phương châm “Đơn giản – Hiệu quả”, chú trọng vào chuyên môn hóa
								và sự phối hợp chặt chẽ giữa các phòng ban, phù hợp với chiến
								lược kinh doanh của công ty.
							</Typography>
							<Typography
								sx={{ marginTop: '20px', width: '50%', textAlign: 'justify' }}>
								Với đội ngũ nhân lực có trình độ và chuyên nghiệp, hầu hết các
								nhân viên trong Công ty đều đã tốt nghiệp các trường Đại học,
								Cao đẳng và có kinh nghiệm thực tế.
							</Typography>
							<Typography
								sx={{ marginTop: '20px', width: '50%', textAlign: 'justify' }}>
								Tại TSC6 luôn có những định hướng phát triển phù hợp với mỗi
								nhân sự của mình, Công ty luôn đặt niềm tin vào họ, tạo mọi điều
								kiện và cơ hội thuận lợi nhất để họ phát triển và thành công.
								Thành công của mỗi nhân sự cũng chính là thành công của Công ty.
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};

export default Person;
