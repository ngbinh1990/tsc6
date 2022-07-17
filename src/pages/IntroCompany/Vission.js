import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

import './Vission.css';
const Vission = () => {
	return (
		<>
			<Box className='vission'>
				<Container>
					<Grid container spacing={4}>
						<Grid item md={8}>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#1a47ac',
								}}>
								TẦM NHÌN - SỨ MỆNH
							</Typography>
							<Typography sx={{ margin: '10px 0px' }}>
								Định hướng phát triển công ty trở thành nhà cung cấp các dịch vụ
								quản lý - khai thác bất động sản với niềm tin hàng đầu tại Việt
								Nam. TSC6 luôn lấy khách hàng làm trung tâm, không ngừng nỗ lực
								mang đến sự hài lòng cho khách hàng bằng sự chuyên nghiệp và tận
								tâm.
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								Sự hài lòng của khách hàng là điều quan trọng nhất. Sự hài lòng
								được thể hiện qua đánh giá của khách hàng khi sử dụng các sản
								phẩm, dịch vụ mà Công ty cung cấp. Đó là “ Chất lượng cao, Tối
								ưu hiệu quả”. Nguyên tắc chuẩn trong phục vụ khách hàng của TSC6
								là:
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								1.Đáp ứng nhanh chóng và hiệu quả mọi yêu cầu hợp lý của khách
								hàng
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								2.Đảm bảo sự hoạt động ổn định và liên tục đối với các dịch vụ
								mà Công ty cung cấp
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								3.Tận tâm, chu đáo với thái độ hòa nhã và thân thiện
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								4.Đảm bảo cung cấp dịch vụ với giá hợp lý, sức cạnh tranh cao
							</Typography>
							<Typography sx={{ margin: '5px 0px' }}>
								5.Luôn quan tâm đến chính sách đào tạo nhân viên để đảm bảo tính
								chuyên môn cao
							</Typography>
						</Grid>
						<Grid item md={4} className='vis-title'>
							<Typography
								sx={{
									textAlign: 'left',
									fontSize: '1.5rem',
									fontWeight: 'bold',
									color: '#1a47ac',
								}}>
								Dự án nổi bật
							</Typography>
							<Box className='vis01'></Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Vission;
